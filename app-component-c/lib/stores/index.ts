import { defineStore } from "pinia";
import { Item } from "../models";

export const useComponentStoreC = defineStore('ComponentStoreC', {
    state: () => ({
        _idSeed: 1,
        _items: [] as Item[],
    }),
    getters: {
        items: state => state._items,
    },
    actions: {
        add() {
            this._items.push({name: `Item ${this._idSeed}`, id: this._idSeed });
            ++this._idSeed;
        },
        remove(id: number) {
            const index = this.items.findIndex(x => x.id == id);
            if(index >= 0) {
                this._items.splice(index, 1);
            }
        }
    }
})

