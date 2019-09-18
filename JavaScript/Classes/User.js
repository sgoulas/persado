class User {
    constructor(info) {
        let _firstName = info.firstName;
        let _lastName = info.lastName;
        let _address = info.address;
        let _booksLoaned = info.hasOwnProperty("booksLoaned")
            ? info.booksLoaned
            : "0";
        let _id = info.hasOwnProperty("id") ? info.id : -1;

        this.getFirstName = () => {
            return _firstName;
        };
        this.getLastName = () => {
            return _lastName;
        };
        this.getAddress = () => {
            return _address;
        };
        this.getBooksLoaned = () => {
            return _booksLoaned;
        };
        this.getID = () => {
            return _id;
        };

        this.toJSON = () => {
            let json = {
                firstName: _firstName,
                lastName: _lastName,
                address: _address,
                booksLoaned: _booksLoaned,
                id: _id
            };

            return json;
        };
    }
}
