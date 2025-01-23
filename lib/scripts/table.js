class Table {
    #config = {
        data: [],
        HTMLParent: null,
        HTMLTable: null,
        TableContent: null,
    }

    constructor(parent) {
        if (!parent) {
            this.#config.HTMLParent = document.body;
        } else {
            this.#config.HTMLParent = parent;
        }
        this.#create();
    }

    #create() {
        this.#config.HTMLTable = document.createElement("table");

        const tableHead = document.createElement("thead");
        tableHead.innerHTML = "<tr><th>#</th><th>name</th><th>surname</th></tr>";
        this.#config.HTMLTable.appendChild(tableHead);
        this.#config.TableContent = document.createElement("tbody");

        this.#config.HTMLTable.appendChild(this.#config.TableContent);
        this.#config.HTMLParent.appendChild(this.#config.HTMLTable);
    }

    configure({
        data,
        HTMLParent,
        HTMLTable,
        TableContent,
              }) {
        if (data) this.#config.data = { ...this.#config.data, ...data };
        if (HTMLParent) this.#config.HTMLParent = HTMLParent;
        if (HTMLTable) this.#config.HTMLTable = HTMLTable;
        if (TableContent) this.#config.TableContent = TableContent;
    }

    update(data) {
        if (this.#config.data.filter(user => (user.name === data.name) && (user.surname === data.surname))[0]) return alert("Bu isimde başka bir kullanıcı halihazırda tabloda yer almaktadır!");
        const information = {
            id: !this.#config.data.length ? 0 : this.#config.data.length,
            ...data
        };
        const tr = document.createElement("tr");
        tr.classList.add("anim-created");
        tr.innerHTML = `<td>${information.id+1}</td><td>${information.name}</td><td>${information.surname}</td>`;
        this.#config.TableContent.appendChild(tr);
        this.#config.data.push(information);
    }
}

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Table;
}
if (typeof window !== "undefined") {
    window.Table = Table;
}