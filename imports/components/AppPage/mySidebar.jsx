import React, {Component} from 'react';
import {Menu, Sidebar, Icon, Tab} from 'semantic-ui-react';
import CytoscapeInfo from "./CanvasInfo";
import {showsidebar} from "../../redux/actions/actioncreators";
import {connect} from "react-redux";
import CanvasProperties from "./CanvasProperties";
import CanvasFunctions from "./CanvasFunctions";


class mySidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebar_visible: false,
        };
    }


    render() {
        const panes = [
            {menuItem: 'Node Info', render: () => <Tab.Pane attached={false} basic><CytoscapeInfo/></Tab.Pane>},
            {menuItem: 'Properties', render: () => <Tab.Pane attached={false} basic> <CanvasProperties/> </Tab.Pane>},
            {menuItem: 'Functions', render: () => <Tab.Pane attached={false} basic> <CanvasFunctions/> </Tab.Pane>}
        ];


        return (
            <div>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    width='wide'
                    direction='right'
                    visible={this.props.canvasProperties.sidebar}
                    vertical
                >
                    <Icon link className="sidebar-close-icon" name='remove' size='large' onClick={this.props.showSidebar}/><br/>
                    <Tab menu={{secondary: true, pointing: true}} panes={panes}/>
                </Sidebar>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        canvasProperties: state.RootReducer.canvasProperties,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showSidebar: function () {
            return dispatch(showsidebar())
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(mySidebar);