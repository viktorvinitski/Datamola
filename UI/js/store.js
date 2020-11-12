(function () {
    let count = 1;
    let idGenerator = () => (count++).toString()

    const messages = [
        {
            id: idGenerator(),
            text: '111',
            createdAt: new Date('1995-12-17T03:04:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Cristiano Ronaldo'
        },
        {
            id: idGenerator(),
            text: '222',
            createdAt: new Date('1995-12-17T03:05:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Leo Messi'
        },
        {
            id: idGenerator(),
            text: '333',
            createdAt: new Date('1995-12-17T03:06:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Bruno Fernandes'
        },
        {
            id: idGenerator(),
            text: '444',
            createdAt: new Date('1995-12-17T03:07:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Harry Kane'
        },
        {
            id: idGenerator(),
            text: '555',
            createdAt: new Date('1995-12-17T03:08:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Dele Alli'
        },
        {
            id: idGenerator(),
            text: '666',
            createdAt: new Date('1995-12-17T03:09:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Wayne Rooney'
        },
        {
            id: idGenerator(),
            text: '777',
            createdAt: new Date('1995-12-17T03:10:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Harry Maguire'
        },
        {
            id: idGenerator(),
            text: '888',
            createdAt: new Date('1995-12-17T03:11:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'David De Gea'
        },
        {
            id: idGenerator(),
            text: '999',
            createdAt: new Date('1995-12-17T03:12:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Paul Pogba'
        },
        {
            id: idGenerator(),
            text: '101010',
            createdAt: new Date('1995-12-17T03:13:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Donny van de Beek'
        },
        {
            id: idGenerator(),
            text: '111111',
            createdAt: new Date('1995-12-17T03:14:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Ronaldinho'
        },
        {
            id: idGenerator(),
            text: '121212',
            createdAt: new Date('1995-12-17T03:15:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Nemanja Matic'
        },
        {
            id: idGenerator(),
            text: '131313',
            createdAt: new Date('1995-12-17T03:16:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Luke Shaw'
        },
        {
            id: idGenerator(),
            text: '141414',
            createdAt: new Date('1995-12-17T03:17:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Anthony Martial'
        },
        {
            id: idGenerator(),
            text: '151515',
            createdAt: new Date('1995-12-17T03:18:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Dan James'
        },
        {
            id: idGenerator(),
            text: '161616',
            createdAt: new Date('1995-12-17T03:19:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Mason Greenwood'
        },
        {
            id: idGenerator(),
            text: '171717',
            createdAt: new Date('1995-12-17T03:20:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Edinson Cavani'
        },
        {
            id: idGenerator(),
            text: '181818',
            createdAt: new Date('1995-12-17T03:21:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Odion Ighalo'
        },
        {
            id: idGenerator(),
            text: '191919',
            createdAt: new Date('1995-12-17T03:22:00'),
            author: 'Viktor Vinitskiy',
            isPersonal: true,
            to: 'Zlatan Ibragimovich'
        },
        {
            id: idGenerator(),
            text: 'Lorem Ipsum is simply dummy text of the printing a!',
            createdAt: new Date('1995-12-17T03:23:00'),
            author: 'Vik Vinitski',
            isPersonal: true,
            to: 'Marcus Rashford'
        }
    ]

    function getMessages(
        skip = 0,
        top = 10,
        { author, dateFrom, dateTo, text } = {}
    ) {
        let result = [...messages];
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

    function getMessage(id) {
        let messageId = [...messages];
        return messageId.filter(item => item.id === id);
    }

    function isNonEmptyString(str) {
        return str && typeof str === 'string';
    }

    function validateMessage({ id, text, createdAt, author }) {
        return isNonEmptyString(id)
             && isNonEmptyString(text) 
             && isNonEmptyString(author) 
             && text.length <= 200 
             && createdAt instanceof Date;
    }

    function addMessage(msg, text) {
        if (validateMessage(msg)) {
            msg.id = idGenerator();
            msg.author = 'Viktor Vinitski';
            msg.createdAt = new Date();
            msg.text = text;
            messages.push(msg);
            return true;
        }
        return false;
    }

    function editMessage(id, msg) {
        let index = messages.findIndex(item => item.id === id);
        if (index === -1) {
            return false;
        }
        let updatedMessage = { ...messages[index], ...msg };
        if (!validateMessage(updatedMessage)) {
            return false;
        }
        messages[index] = updatedMessage;
        return true;
    }

    function removeMessage(id) {
        let index = messages.findIndex(item => item.id === id)
        if (index === -1) {
            return false
        }
        messages.splice(index, 1)
        return true
    }


console.log('getMsgById', getMessage('15')) //Получить сообщение по ID


console.log('getMsg', getMessages(10, 20, filterConfig = {
    author: '',
    dateFrom: new Date('1995-12-17T03:04:00'),
    dateTo: new Date('1995-12-17T03:23:00'),
    text: ''
})) //Получить массив сообщений с параметрами skip, top, filterConfig


console.log('addMsg', addMessage({
    id: idGenerator(),
    text: ' ',
    createdAt: new Date(),
    author: ' '
}, 'asdasdasdas'))
console.log('addMsg', addMessage({
    id: idGenerator(),
    text: ' ',
    createdAt: new Date(),
    author: ' '
}, 'asdasdasdas'))
console.log('addMsg', addMessage({
    id: idGenerator(),
    text: ' ',
    createdAt: new Date(),
    author: ' '
}, 'asdasdasdas'))
console.log(messages);
 // Добавить сообщение с определенным текстом

console.log('editMsg', editMessage('5', { text: 'www' }))// Изменить сообщение
console.log(messages);

console.log('removeMsg', removeMessage('17'))// Удалить сообщение
console.log(messages);

console.log('addMessagesByAuthor', getMessages(0,25, {author: 'Vik'}));//Получить сообщения по автору

return {
    getMessages,
    getMessage,
    validateMessage,
    addMessage,
    editMessage,
    removeMessage
}

}());
