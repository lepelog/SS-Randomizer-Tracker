import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import AreaCounters from '../locationTracker/AreaCounters';
import Item from './Item';

import noSmallKey from '../assets/dungeons/noSmallKey.png';
import oneSmallKey from '../assets/dungeons/SS_Small_Key_Icon.png';
import twoSmallKey from '../assets/dungeons/2_smallKey.png';
import threeSmallKey from '../assets/dungeons/3_smallKey.png';
import noKeyPiece from '../assets/dungeons/et_noEntryPieces.png';
import oneKeyPiece from '../assets/dungeons/SS_Piece_of_the_Key_Icon.png';
import twoKeyPiece from '../assets/dungeons/et_2piece.png';
import threeKeyPiece from '../assets/dungeons/et_3piece.png';
import fourKeyPiece from '../assets/dungeons/et_4piece.png';
import fiveKeyPiece from '../assets/dungeons/SS_Pieces_of_the_Key_Icon.png';
import check from '../assets/Entrance.png';
import cross from '../assets/No_Entrance.png';
import noSVBK from '../assets/dungeons/sv_noBossKey.png';
import svBK from '../assets/dungeons/SS_Golden_Carving_Icon.png';
import noETBK from '../assets/dungeons/et_noBossKey.png';
import etBK from '../assets/dungeons/SS_Dragon_Sculpture_Icon.png';
import noLMFBK from '../assets/dungeons/lmf_noBossKey.png';
import lmfBK from '../assets/dungeons/SS_Ancient_Circuit_Icon.png';
import noACBK from '../assets/dungeons/ac_noBossKey.png';
import acBK from '../assets/dungeons/SS_Blessed_Idol_Icon.png';
import noSSHBK from '../assets/dungeons/ssh_noBossKey.png';
import sshBK from '../assets/dungeons/SS_Squid_Carving_Icon.png';
import noFSBK from '../assets/dungeons/fs_noBossKey.png';
import fsBK from '../assets/dungeons/SS_Mysterious_Crystals_Icon.png';
import noTriforce from '../assets/dungeons/noTriforce.png';
import oneTriforce from '../assets/dungeons/TriforcePiece.png';
import twoTriforce from '../assets/dungeons/2_TriforcePiece.png';
import threeTriforce from '../assets/dungeons/3_TriforcePiece.png';
import g1 from '../assets/bosses/g1.png';
import scaldera from '../assets/bosses/scaldera.png';
import moldarach from '../assets/bosses/moldarach.png';
import koloktos from '../assets/bosses/koloktos.png';
import tentalus from '../assets/bosses/tentalus.png';
import g2 from '../assets/bosses/g2.png';
import DungeonName from './items/dungeons/DungeonName';
import ColorScheme from '../customization/ColorScheme';
import Logic from '../logic/Logic';

class DungeonTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
        };
        this.smallKeyImages = [
            noSmallKey,
            oneSmallKey,
            twoSmallKey,
            threeSmallKey,
        ];
        this.keyPieceImages = [
            noKeyPiece,
            oneKeyPiece,
            twoKeyPiece,
            threeKeyPiece,
            fourKeyPiece,
            fiveKeyPiece,
        ];
        this.dungeonEnteredImages = [
            cross,
            check,
        ];
        this.svBKImages = [
            noSVBK,
            svBK,
        ];
        this.etBKImages = [
            noETBK,
            etBK,
        ];
        this.lmfBKImages = [
            noLMFBK,
            lmfBK,
        ];
        this.acBKImages = [
            noACBK,
            acBK,
        ];
        this.sshBKImages = [
            noSSHBK,
            sshBK,
        ];
        this.fsBKImages = [
            noFSBK,
            fsBK,
        ];
        this.triforceImages = [
            noTriforce,
            oneTriforce,
            twoTriforce,
            threeTriforce,
        ];
    }

    componentDidMount() {
        this.setState({ width: this.divElement.clientWidth });
    }

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        let { width } = this.state;
        if (this.divElement !== undefined) {
            width = this.divElement.clientWidth;
        }

        const numDungeons = this.props.skykeep ? 7 : 6;
        const colWidth = width / (numDungeons * 2);
        return (
            <Col
                id="dungeonTracker"
                ref={(divElement) => { this.divElement = divElement; }}
            >
                <Row noGutters>
                    <Col id="svSmall">
                        <Item itemName="SW Small Key" images={this.smallKeyImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="svBossKey">
                        <Item itemName="SW Boss Key" images={this.svBKImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="etEntry">
                        <Item itemName="Key Piece" images={this.keyPieceImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="etBossKey">
                        <Item itemName="ET Boss Key" images={this.etBKImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="lmfSmall">
                        <Item itemName="LMF Small Key" images={this.smallKeyImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="lmfBossKey">
                        <Item itemName="LMF Boss Key" images={this.lmfBKImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="acSmall">
                        <Item itemName="AC Small Key" images={this.smallKeyImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="acBossKey">
                        <Item itemName="AC Boss Key" images={this.acBKImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="sshSmall">
                        <Item itemName="SS Small Key" images={this.smallKeyImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="sshBossKey">
                        <Item itemName="SS Boss Key" images={this.sshBKImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="fsSmall">
                        <Item itemName="FS Small Key" images={this.smallKeyImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    <Col id="fsBossKey">
                        <Item itemName="FS Boss Key" images={this.fsBKImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                    </Col>
                    {
                        this.props.skykeep && (
                            <Row noGutters>
                                <Col id="skSmall">
                                    <Item itemName="SK Small Key" images={this.smallKeyImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                                </Col>
                                <Col id="triforce">
                                    <Item itemName="Triforce" images={this.triforceImages} logic={this.props.logic} onChange={this.props.handleItemClick} imgWidth={colWidth} ignoreItemClass />
                                </Col>
                            </Row>
                        )
                    }
                </Row>
                <Row noGutters>
                    <Col id="svName" className="dungeonName">
                        <DungeonName
                            dungeon="SV"
                            dungeonName="Skyview"
                            logic={this.props.logic}
                            parent={this.props.styleProps}
                            dungeonChange={this.props.handleDungeonUpdate}
                            colorScheme={this.props.colorScheme}
                        />
                    </Col>

                    <Col id="etName" className="dungeonName">
                        <DungeonName
                            dungeon="ET"
                            dungeonName="Earth Temple"
                            logic={this.props.logic}
                            parent={this.props.styleProps}
                            dungeonChange={this.props.handleDungeonUpdate}
                            colorScheme={this.props.colorScheme}
                        />
                    </Col>

                    <Col id="lmfName" className="dungeonName">
                        <DungeonName
                            dungeon="LMF"
                            dungeonName="Lanayru Mining Facility"
                            logic={this.props.logic}
                            parent={this.props.styleProps}
                            dungeonChange={this.props.handleDungeonUpdate}
                            colorScheme={this.props.colorScheme}
                        />
                    </Col>

                    <Col id="acName" className="dungeonName">
                        <DungeonName
                            dungeon="AC"
                            dungeonName="Ancient Cistern"
                            logic={this.props.logic}
                            parent={this.props.styleProps}
                            dungeonChange={this.props.handleDungeonUpdate}
                            colorScheme={this.props.colorScheme}
                        />
                    </Col>

                    <Col id="sshName" className="dungeonName">
                        <DungeonName
                            dungeon="SSH"
                            dungeonName="Sandship"
                            logic={this.props.logic}
                            parent={this.props.styleProps}
                            dungeonChange={this.props.handleDungeonUpdate}
                            colorScheme={this.props.colorScheme}
                        />
                    </Col>

                    <Col id="fsName" className="dungeonName">
                        <DungeonName
                            dungeon="FS"
                            dungeonName="Fire Sanctuary"
                            logic={this.props.logic}
                            parent={this.props.styleProps}
                            dungeonChange={this.props.handleDungeonUpdate}
                            colorScheme={this.props.colorScheme}
                        />
                    </Col>

                    {
                        this.props.skykeep && (
                            <Col id="skName" className="dungeonName">
                                <DungeonName
                                    dungeon="SK"
                                    dungeonName="Skykeep"
                                    logic={this.props.logic}
                                    parent={this.props.styleProps}
                                    dungeonChange={this.props.handleDungeonUpdate}
                                    colorScheme={this.props.colorScheme}
                                />
                            </Col>
                        )
                    }
                </Row>
                <Row noGutters>
                    <Col>
                        <img src={g1} alt="Ghirahim 1" width={colWidth * 2} />
                    </Col>
                    <Col>
                        <img src={scaldera} alt="Scaldera" width={colWidth * 2} />
                    </Col>
                    <Col>
                        <img src={moldarach} alt="Moldarach" width={colWidth * 2} />
                    </Col>
                    <Col>
                        <img src={koloktos} alt="Koloktos" width={colWidth * 2} />
                    </Col>
                    <Col>
                        <img src={tentalus} alt="Tentalus" width={colWidth * 2} />
                    </Col>
                    <Col>
                        <img src={g2} alt="Ghirahim 2" width={colWidth * 2} />
                    </Col>
                    {
                        this.props.skykeep && (
                            <Col id="skChecks">
                                <img src={g1} alt="Ghirahim 1" width={colWidth * 2} />
                            </Col>
                        )
                    }
                </Row>

                <Row noGutters>
                    <Col id="svChecks">
                        <AreaCounters totalChecksLeftInArea={this.props.logic.getTotalCountForArea('Skyview')} totalChecksAccessible={this.props.logic.getInLogicCountForArea('Skyview')} colorScheme={this.props.colorScheme} />
                    </Col>

                    <Col id="etChecks">
                        <AreaCounters totalChecksLeftInArea={this.props.logic.getTotalCountForArea('Earth Temple')} totalChecksAccessible={this.props.logic.getInLogicCountForArea('Earth Temple')} colorScheme={this.props.colorScheme} />
                    </Col>

                    <Col id="lmfChecks">
                        <AreaCounters totalChecksLeftInArea={this.props.logic.getTotalCountForArea('Lanayru Mining Facility')} totalChecksAccessible={this.props.logic.getInLogicCountForArea('Lanayru Mining Facility')} colorScheme={this.props.colorScheme} />
                    </Col>

                    <Col id="acChecks">
                        <AreaCounters totalChecksLeftInArea={this.props.logic.getTotalCountForArea('Ancient Cistern')} totalChecksAccessible={this.props.logic.getInLogicCountForArea('Ancient Cistern')} colorScheme={this.props.colorScheme} />
                    </Col>

                    <Col id="sshChecks">
                        <AreaCounters totalChecksLeftInArea={this.props.logic.getTotalCountForArea('Sandship')} totalChecksAccessible={this.props.logic.getInLogicCountForArea('Sandship')} colorScheme={this.props.colorScheme} />
                    </Col>

                    <Col id="fsChecks">
                        <AreaCounters totalChecksLeftInArea={this.props.logic.getTotalCountForArea('Fire Sanctuary')} totalChecksAccessible={this.props.logic.getInLogicCountForArea('Fire Sanctuary')} colorScheme={this.props.colorScheme} />
                    </Col>

                    {
                        this.props.skykeep && (
                            <Col id="skChecks">
                                <AreaCounters totalChecksLeftInArea={this.props.logic.getTotalCountForArea('Skykeep')} totalChecksAccessible={this.props.logic.getInLogicCountForArea('Skykeep')} colorScheme={this.props.colorScheme} />
                            </Col>
                        )
                    }

                </Row>
            </Col>
        );
    }
}

DungeonTracker.propTypes = {
    skykeep: PropTypes.bool.isRequired,
    logic: PropTypes.instanceOf(Logic).isRequired,
    styleProps: PropTypes.shape().isRequired,
    handleDungeonUpdate: PropTypes.func.isRequired,
    colorScheme: PropTypes.instanceOf(ColorScheme).isRequired,
    handleItemClick: PropTypes.func.isRequired,
};

export default DungeonTracker;
