/**
 * @name Senpai Plugin
 * @version 0.0.2
 */

const config = {
    "plugin": {
        "name": "Senpai",
        "type": "Plugin",
        "author": "YadMations",
        "version": "0.0.2",
        "description": "Tag ur Senpai with lovely colours <3",
        "source": "https://raw.githubusercontent.com/YadMations/YadMations/main/BetterDiscord/Plugins/Senpai.plugin.js"
    }
};
module.exports =
    class Senpai {
        getName() {return config.plugin.name;} // Name of your plugin to show on the plugins page 
        getDescription() {return config.plugin.description;} // Description to show on the plugins page 
        getVersion() {return config.plugin.version;} // Current version. I recommend following semantic versioning <http://semver.org/> (e.g. 0.0.1)
        getAuthor() {return config.plugin.author;} // Your name
    
        getSettingsPanel() {
            return `
            <p style="font-size:15px; opacity:0.02">This plugin is useless but anyways, if you want to use it there's no problem <3</p>
            <span style="font-size:12px; opacity:0.1">Made with love for you and your Senpai <3</span>`
        }

        load() {
        } // Called when the plugin is loaded in to memory
    
        start() {
            // if(this.getVersion() !== "0.0.2") {
            //     BdApi.showConfirmationModal("Outdated Version Nya! ùnú", `Download lastest version of ${config.plugin.name} ${config.plugin.type} <3`, {
            //         confirmText: 'Download Now owo',
            //         cancelText: 'Cancel unu',
            //         onCancel: _ => {BdApi.showToast("Hmph... Maybe next time! <3", {type: "error", icon: false})},
            //         onConfirm: _ => {
            //             this.getRawPlugin()
            //         }
            //     })
            // }
            BdApi.showToast("Senpai Plugin has been started! OwO", {type: "success"})
        } // Called when the plugin is activated (including after reloads)
        stop() {
            BdApi.showToast("Senpai Plugin has been stopped! See ya later <3", {type: "success"})
        } // Called when the plugin is deactivated

        getRawPlugin() {
            fetch(config.plugin.source, {method: "GET"}).then((res) => {
                res.text()
            }).then((text) => {
                return text;
            })
        }
    }