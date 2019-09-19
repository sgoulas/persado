class Book {
    constructor(info) {
        let _name = info.name;
        let _summary = info.summary;
        let _ISBN = info.ISBN;
        let _purchased = info.purchased;
        let _available = info.available;
        let _id = info.hasOwnProperty("id") ? info.id : "-1";

        this.getName = () => {
            return _name;
        };
        this.getSummary = () => {
            return _summary;
        };
        this.getISBN = () => {
            return _ISBN;
        };
        this.getPurchased = () => {
            return _purchased;
        };
        this.getAvailable = () => {
            return _available;
        };
        this.getID = () => {
            return _id;
        };

        this.toJSON = () => {
            let json = {
                name: _name,
                summary: _summary,
                ISBN: _ISBN,
                purchased: _purchased,
                available: _available,
                id: _id
            };

            return json;
        };
    }
}
