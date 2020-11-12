let count = 1;
let idGenerator = () => (count++).toString()

const messages = [
    {
        text: '111',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Cristiano Ronaldo'
    },
    {
        text: '222',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Leo Messi'
    },
    {
        text: '333',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Bruno Fernandes'
    },
    {
         
        text: '444',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Harry Kane'
    },
    {
         
        text: '555',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Dele Alli'
    },
    {
         
        text: '666',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Wayne Rooney'
    },
    {
         
        text: '777',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Harry Maguire'
    },
    {
         
        text: '888',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'David De Gea'
    },
    {
         
        text: '999',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Paul Pogba'
    },
    {
        text: '101010',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Donny van de Beek'
    },
    {
        text: '111111',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Ronaldinho'
    },
    {
        text: '121212',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Nemanja Matic'
    },
    {
        text: '131313',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Luke Shaw'
    },
    {
        text: '141414',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Anthony Martial'
    },
    {
        text: '151515',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Dan James'
    },
    {
        text: '161616',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Mason Greenwood'
    },
    {
        text: '171717',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Edinson Cavani'
    },
    {
        text: '181818',
        author: 'Viktor Vinitski',
        isPersonal: true,
        to: 'Odion Ighalo'
    },
    {
        text: '191919',
        author: 'Viktor Vinitskiy',
        isPersonal: true,
        to: 'Zlatan Ibragimovich'
    },
    {
        text: '202020',
        author: 'Vik Vinitski',
        isPersonal: true,
        to: 'Marcus Rashford'
    }
]

class Message {
    constructor({text, to, isPersonal, author}) {
        this._id = idGenerator(),
        this.text = text,
        this._createdAt = new Date(),
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
    constructor(msgs = []){
        this._messages = msgs;
    }
    getPage(
        skip = 0,
        top = 10,
        { author, dateFrom, dateTo, text } = {}
    ) {
        let result = [...this._messages];
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
        if(!MessageModel.validate(msg)){
            return false;
        }
        this._messages.push(new Message(msg));
        return true;
    }
    edit(id, msg) {
        let index = this._messages.findIndex(item => item.id === id);
        if (index === -1 || !MessageModel.validateFields(msg)) {
            return false;
        }
        Object.assign(this._messages[index], msg);
        return true;
    }
    remove(id) {
        let index = this._messages.findIndex(item => item.id === id)
        if (index === -1) {
            return false;
        }
        this._messages.splice(index, 1)
        return true;
    }
    static validate({ text, author }) {
        return isNonEmptyString(text)
            && isNonEmptyString(author)
            && text.length <= 200
    }
    static validateFields({ text }) {
        return !text || text.length <= 200;
    }
    addAll(msgs = []){
        let notValidMessages = [];
        
        msgs.forEach(item => {
            if(MessageModel.validate(item)){
                this._messages.push(new Message(item));
            } else {
                notValidMessages.push(item);
            }
        })

        return notValidMessages;
    }
    clear(){
        return this._messages = [];
    }   
}

let messageList = new MessageModel(messages.map(item => new Message(item)))


console.log('addAll',messageList.addAll(msgs = [...messages])); // Добавить все сообщения из массива сообщений, возвращает невалидные
console.log('get', messageList.get('13')); // Найти сообщение по ID
console.log('getPage', messageList.getPage(0, 20, { author: 'Vik' })); // Получить определенное количество сообщений
console.log('add', messageList.add({
    text: 'asdasdasdasdasdasd',
    author: 'Viktor Vinitski'
})); // Добавить сообщение
console.log('remove', messageList.remove('15')); // Удалить сообщение
console.log('edit', messageList.edit('16', { text: 'asdasdasd' })); // Изменить сообщение
console.log('getPage', messageList.getPage(0, 20)); // Показать измененные сообщения
console.log('clear', messageList.clear()); // Очистить список сообщений