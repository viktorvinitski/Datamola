(function () {
    let messages = [
        {
            id: '1',
            text: 'Lorem Ipsum is simply dummy text of the printing and ',
            createdAt: new Date('1995-12-17T03:04:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Cristiano Ronaldo'
        },
        {
            id: '2',
            text: 'Lorem Ipsum is simply ',
            createdAt: new Date('1995-12-17T03:05:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Leo Messi'
        },
        {
            id: '3',
            text: ' dummy text of the printing and typesetting industry. Lorem Ipsum has',
            createdAt: new Date('1995-12-17T03:06:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Bruno Fernandes'
        },
        {
            id: '4',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
            createdAt: new Date('1995-12-17T03:07:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Harry Kane'
        },
        {
            id: '5',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu',
            createdAt: new Date('1995-12-17T03:08:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Dele Alli'
        },
        {
            id: '6',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I',
            createdAt: new Date('1995-12-17T03:09:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Wayne Rooney'
        },
        {
            id: '7',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            createdAt: new Date('1995-12-17T03:10:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Harry Maguire'
        },
        {
            id: '8',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips',
            createdAt: new Date('1995-12-17T03:11:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'David De Gea'
        },
        {
            id: '9',
            text: 'Lorem Ipsum is simply dummy ',
            createdAt: new Date('1995-12-17T03:12:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Paul Pogba'
        },
        {
            id: '10',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
            createdAt: new Date('1995-12-17T03:13:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Donny van de Beek'
        },
        {
            id: '11',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has!',
            createdAt: new Date('1995-12-17T03:14:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Ronaldinho'
        },
        {
            id: '12',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem !',
            createdAt: new Date('1995-12-17T03:15:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Nemanja Matic'
        },
        {
            id: '13',
            text: 'Lorem Ipsum is simply dummy text of the printing!',
            createdAt: new Date('1995-12-17T03:16:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Luke Shaw'
        },
        {
            id: '14',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lor!',
            createdAt: new Date('1995-12-17T03:17:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Anthony Martial'
        },
        {
            id: '15',
            text: 'Lorem Ipsum is simply dummy text of !',
            createdAt: new Date('1995-12-17T03:18:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Dan James'
        },
        {
            id: '16',
            text: 'Lorem Ipsum is simply dummy!',
            createdAt: new Date('1995-12-17T03:19:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Mason Greenwood'
        },
        {
            id: '17',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr!',
            createdAt: new Date('1995-12-17T03:20:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Edinson Cavani'
        },
        {
            id: '18',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting !',
            createdAt: new Date('1995-12-17T03:21:00'),
            author: 'Viktor Vinitski',
            isPersonal: true,
            to: 'Odion Ighalo'
        },
        {
            id: '19',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting in!',
            createdAt: new Date('1995-12-17T03:22:00'),
            author: 'Viktor Vinitskiy',
            isPersonal: true,
            to: 'Zlatan Ibragimovich'
        },
        {
            id: '20',
            text: 'Lorem Ipsum is simply dummy text of the printing a!',
            createdAt: new Date('1995-12-17T03:23:00'),
            author: 'Vik Vinitski',
            isPersonal: true,
            to: 'Marcus Rashford'
        }
    ]

    function getMessages(
        start,
        end,
        { author, dateFrom, dateTo, text } = {}
    ) {
        let result = [...messages];
        if (author) {
            result = result.filter(item => item.author.includes(author));
        }
        if (dateFrom) {
            result = result.filter(item => item.createdAt >= dateFrom);
        }
        if (dateTo) {
            result = result.filter(item => item.createdAt <= dateTo);
        }
        if (text) {
            result = result.filter(item => item.text.includes(text));
        }
        return result
            .sort((a, b) => a.createdAt - b.createdAt)
            .slice(start, end);
    }

    function getMessageById(id){
        let messageId = [...messages];
        return messageId.filter(item => item.id === id);
    }

    function isNonEmptyString(str) {
        return str && typeof str === 'string';
    }

    function validateMessage({ id, text, createdAt, author}) {
        return isNonEmptyString(id) && isNonEmptyString(text) && isNonEmptyString(author) && text.length <= 200 && createdAt instanceof Date;
    }

    function addMessage(msg) {
        if (validateMessage(msg)) {
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
        messages = messages.filter(item => item.id !== id);
    }

    console.log(getMessageById('15'))


    console.log(getMessages(0, 20, filterConfig = {
        author: '',
        dateFrom: new Date('1995-12-17T03:03:00'),
        dateTo: new Date('1995-12-17T03:10:00'),
        text: ''
    }))

    console.log(addMessage({
        id: '21',
        text: 'Lorem Ipsum is simply dummy text of the printing a!',
        createdAt: new Date('1995-12-17T03:23:00'),
        author: 'Vik Vinitski',
        isPersonal: true,
        to: 'Marcus Rash'
    }
    ))

    console.log(editMessage('3', { text: 'www' }))
    console.log(messages);

    console.log(removeMessage('17'))
    console.log(removeMessage('21'));
    console.log(messages);

}());
