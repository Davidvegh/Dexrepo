class toDoList {
    constructor() {
        this.list = [];
    }

    logList() {
        console.log(this.list);
    }

    returnList(){
        return this.list;
    }

    addItem(item) {
        this.list.push({ item: item, status: "nincs kész" });
    }

    deleteItem(item) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] === item) {
                this.list.splice(this.list[i], 1);
            }
        }
    }

    setNotReady(item) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].item === item) {
                this.list[i].status = "nincs kész";
            }
        }
    }

    setReady(item) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].item === item) {
                this.list[i].status = "kész van";
            }
        }
    }
}

let thingstodo = new toDoList();

thingstodo.addItem("mosás");
thingstodo.addItem("főzés");

thingstodo.logList();

thingstodo.deleteItem("mosás");

thingstodo.logList();

thingstodo.setReady("főzés");

thingstodo.logList();