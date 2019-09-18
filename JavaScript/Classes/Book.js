class Book {
    constructor(info) {
        let _name = info.name;
        let _summary = info.summary;
        let _ISBN = info.ISBN;
        let _available = info.available;
        let _loaned = info.loaned;
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
        this.getAvailable = () => {
            return _available;
        };
        this.getLoaned = () => {
            return _loaned;
        };
        this.getID = () => {
            return _id;
        };

        this.toJSON = () => {
            let json = {
                name: _name,
                summary: _summary,
                ISBN: _ISBN,
                available: _available,
                loaned: _loaned,
                id: _id
            };

            return json;
        };
    }
}
