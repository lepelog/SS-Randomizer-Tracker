import { load } from 'js-yaml';

type UnparsedRequirement = string;

type RawArea = {
  [name: string]: RawArea;
} & {
  locations?: Record<string, UnparsedRequirement>;
  macros?: Record<string, UnparsedRequirement>;
  exits?: Record<string, UnparsedRequirement>;
  entrance?: UnparsedRequirement;
};

enum AllowedTimeOfDay {
  DayOnly = 'DayOnly',
  NightOnly = 'NightOnly',
  Both = 'Both'
}

type UnparsedLogicFile = {
  [name: string]: RawArea;
} & {
  "allowed-time-of-day"?: AllowedTimeOfDay;
  "hint-region"?: string;
  // locations on file level
  macros: Record<string, UnparsedRequirement>;
};

interface LateResolvedReq {
  name: string,
  requirement: string,
  path?: string[]
}

async function loadRawLogic(baseUrl: string = 'https://raw.githubusercontent.com/yannl35133/sslib/entrance-rando-logic'): Promise<Record<string, UnparsedLogicFile>> {
  const filenames = [
    'Ancient Cistern',
    'Earth Temple',
    'Eldin',
    'Faron',
    'Fire Sanctuary',
    'Lanayru Mining Facility',
    'Lanayru',
    'Sandship',
    'Sky Keep',
    'Sky',
    'Skyloft',
    'Skyview',
  ];
  return Object.fromEntries(
    await Promise.all(
      filenames.map(async (name) => {
        const response = await fetch(`${baseUrl}/logic/requirements/${name}.yaml`);
        const text = await response.text();
        return [name, load(text)];
      }),
    ),
  );
}

function processAreasRec(requirements: Record<string, string>,
  laterResolvedReqs: LateResolvedReq[], areaPath: string[], area: RawArea) {
  const {
    locations, entrance, exits, macros, ...subAreas
  } = area;
  Object.entries(locations ?? {}).concat(Object.entries(macros ?? {})).forEach(([locName, req]) => {
    if (locName.includes(' - ')) {
      // attaches a requirement to another requirement
      laterResolvedReqs.push({
        name: locName,
        path: areaPath,
        requirement: req,
      });
      console.log(`skipping ${locName} at ${areaPath.join('\\')} for now`);
    } else {
      const newAreaPath = [...areaPath, locName].join('\\');
      // TODO: parse
      // eslint-disable-next-line no-param-reassign
      requirements[newAreaPath] = req;
    }
  });
  // Object.entries(exits ?? {}).forEach(([exitName, req]) => {
  //   const newAreaPath = [...areaPath, exitName].join('\\');
  //   requirements[newAreaPath] = req;
  // });
  // if (entrance !== undefined) {
  //   const parentPath = areaPath.slice(0, areaPath.length - 1);
  // }
  // for (const exitName in exits) {
  //   const exit = exits[exitName];
  // }
  Object.entries(subAreas).forEach(([subAreaName, subArea]) => {
    if (typeof subArea === 'object') {
      processAreasRec(requirements, laterResolvedReqs, [...areaPath, subAreaName], subArea);
    } else {
      console.log('unknown', subAreaName, subArea);
    }
  });
}

// search query is supposed to be ` - ` separated
// returns the full path
// function search(unparsedLogicFiles: Record<string,
// UnparsedLogicFile>, currentPath: string[], searchQuery: string)

function processRawLogic(logicFiles: Record<string, UnparsedLogicFile>) {
  const requirements = {};
  const laterResolvedReqs: LateResolvedReq[] = [];
  Object.entries(logicFiles).forEach(([logicFileName, logicFile]) => {
    processAreasRec(requirements, laterResolvedReqs, [logicFileName], logicFile);
  });
  return [requirements, laterResolvedReqs];
}

// eslint-disable-next-line import/prefer-default-export
export function doTest() {
  loadRawLogic().then((logic) => {
    console.log(processRawLogic(logic));
  });
}
