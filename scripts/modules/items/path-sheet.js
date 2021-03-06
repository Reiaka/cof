/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
import {CofItemSheet} from "../items/item-sheet.js";
import {Logger} from "../logger.js";

export class CofPathSheet extends CofItemSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["cof", "sheet", "item", "path"],
            template: System.templatesPath + "/items/path-sheet.hbs",
            width: 430,
            height: 430,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "details"}]
        });
    }

    activateListeners(html) {
        super.activateListeners(html);
        // // Initiate a roll
        // html.find('#species-select').click(ev => {
        //     ev.preventDefault();
        // });
    }

    /** @override */
    setPosition(options = {}) {
        const position = super.setPosition(options);
        const sheetBody = this.element.find(".sheet-body");
        const bodyHeight = position.height - 192;
        sheetBody.css("height", bodyHeight);
        return position;
    }
}
