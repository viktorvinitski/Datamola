'use strict';
let count = 1;
let idGenerator = () => (count++).toString()
const messages = [
    {
        id: idGenerator(),
        text: '111',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Cristiano Ronaldo'
    },
    {
        id: idGenerator(),
        text: '222',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Leo Messi'
    },
    {
        id: idGenerator(),
        text: '333',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Bruno Fernandes'
    },
    {
        id: idGenerator(),
        text: '444',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Harry Kane'
    },
    {
        id: idGenerator(),
        text: '555',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Dele Alli'
    },
    {
        id: idGenerator(),
        text: '666',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Wayne Rooney'
    },
    {
        id: idGenerator(),
        text: '777',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Harry Maguire'
    },
    {
        id: idGenerator(),
        text: '888',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'David De Gea'
    },
    {
        id: idGenerator(),
        text: '999',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Paul Pogba'
    },
    {
        id: idGenerator(),
        text: '101010',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Donny van de Beek'
    },
    {
        id: idGenerator(),
        text: '111111',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Ronaldinho'
    },
    {
        id: idGenerator(),
        text: '121212',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Nemanja Matic'
    },
    {
        id: idGenerator(),
        text: '131313',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Luke Shaw'
    },
    {
        id: idGenerator(),
        text: '141414',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Anthony Martial'
    },
    {
        id: idGenerator(),
        text: '151515',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Dan James'
    },
    {
        id: idGenerator(),
        text: '161616',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Mason Greenwood'
    },
    {
        id: idGenerator(),
        text: '171717',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Edinson Cavani'
    },
    {
        id: idGenerator(),
        text: '181818',
        createdAt: new Date(),
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Odion Ighalo'
    },
    {
        id: idGenerator(),
        text: '191919',
        createdAt: new Date(),
        author: 'Viktor Vinitskiy',
        isPersonal: true,
        to: 'Zlatan Ibragimovich'
    },
    {
        id: idGenerator(),
        text: '202020',
        createdAt: new Date(),
        author: 'Vik Vinitski',
        isPersonal: true,
        to: 'Marcus Rashford'
    }
]

class Message {
    constructor({ id, text, createdAt, to, isPersonal, author }) {
        this._id = id,
        this.text = text,
        this._createdAt = createdAt,
        this._author = author,
        this.isPersonal = isPersonal,
        this.to = to
    }
    get id() {
        return this._id
    }
    get author() {
        return this._author
    }
    get createdAt() {
        return this._createdAt
    }

}

function isNonEmptyString(str) {
    return str && typeof str === 'string';
}
class MessageModel {
    constructor(msgs = []) {
        this._messages = msgs;
        this._user = 'Viktor Vinitski'
    }
    getPage(
        skip = 0,
        top = 10,
        { author, dateFrom, dateTo, text } = {}
    ) {
        let result = this._messages.filter(item => item.author === this._user)
        if (author) {
            result = result.filter(item => item.author.toLowerCase().includes(author.toLowerCase()));
        }
        if (dateFrom) {
            result = result.filter(item => item.createdAt >= dateFrom);
        }
        if (dateTo) {
            result = result.filter(item => item.createdAt <= dateTo);
        }
        if (text) {
            result = result.filter(item => item.text.toLowerCase().includes(text.toLowerCase()));
        }
        return result
            .sort((a, b) => a.createdAt - b.createdAt)
            .slice(skip, skip + top);
    }
    get(id) {
        return this._messages.find(item => item.id === id);
    }
    add(msg) {
        if (MessageModel.validate(msg)) {
            msg.id = idGenerator();
            msg.createdAt = new Date();
            msg.author = this._user;
            this._messages.push(new Message(msg));
            return true;
        }return false
    }
    edit(id, msg) {
        let index = this._messages.findIndex(item => item.id === id);
        if (index === -1 || !MessageModel.validateFields(msg)) {
            return false;
        }
        if (this._messages[index].author === this._user) {
            Object.assign(this._messages[index], msg);
            return true;
        }
        return false;

    }
    remove(id) {
        let index = this._messages.findIndex(item => item.id === id)
        if (index === -1) {
            return false;
        }
        if (this._messages[index].author === this._user) {
            this._messages.splice(index, 1)
            return true;
        }
        return false;
    }
    static validate({ text }) {
        return  isNonEmptyString(text) && text.length <= 200 
    }
    static validateFields({ text }) {
        return !text || text.length <= 200;
    }
    addAll(msgs = []) {
        let notValidMessages = [];

        msgs.forEach(item => {
            let added = this.add(item);
            if(!added){
                notValidMessages.push(item)
            }
        })

        return notValidMessages;
    }
    clear() {
        return this._messages = [];
    }
}

let messageList = new MessageModel(messages.map(item => new Message(item)))




console.log('addAll', messageList.addAll([...messages])); // Добавить все сообщения из массива сообщений, возвращает невалидные
console.log('get', messageList.get('13')); // Найти сообщение по ID
console.log('getPage', messageList.getPage(0, 20, {author: 'Viktor'})); // Получить определенное количество сообщений
console.log('add', messageList.add({
    text: 'asdasdasdasdasdasd',
    isPersonal: true,
    to: 'Bruno'
})); // Добавить сообщение
console.log(messageList.getPage(0,45));
console.log('remove', messageList.remove('15')); // Удалить сообщение
console.log('edit', messageList.edit('16', { text: 'asdasdasd' })); // Изменить сообщение
console.log('getPage', messageList.getPage(0, 20)); // Показать измененные сообщения
console.log('clear', messageList.clear()); // Очистить список сообщений