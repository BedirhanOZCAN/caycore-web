import runSideMenuActions from "./actions";

class SideMenuController {
    subscribers = [];

    state = {
        isActive: false
    }


    addEventListener = (name, subscriber) => {
        this.subscribers.push({
            name,
            func: subscriber
        })
    };

    removeEventListener = (name, subscriber) => {
        const subscriberIndex = this.subscribers.findIndex(item => item.name === name && item.func === subscriber);
        this.subscribers.splice(subscriberIndex, 1);
    };

    removeAllListeners = () => {
        this.subscribers = [];
    };

    emit = (name, payload) => {
        const response = runSideMenuActions(name, this.state, payload)

        this.subscribers.forEach(item => {
            if (item.name === name) {
                item.func(response);
            }
        });
    };

};

const _sideMenuController = new SideMenuController();
export default _sideMenuController;