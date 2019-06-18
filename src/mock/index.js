import models from '../models';
import { uuidv4 } from '../utils/uuid';

export const createMockModel = async model => {
    // USERS
    const user0 = new models.User({
        username: 'Unauthorized',
        email: 'invalid@email.com',
        password: 'z',
        firstname: 'Not',
        lastname: 'Authorized',
        location: 'Unknown',
        image:
            'http://www.safetylabelsolutions.com/assets/images/products/7004H-ISO.gif',
        createdAt: new Date(),
    });
    const user1 = new models.User({
        username: 'Sebbe',
        email: 'GUN@email.com',
        password: 'x',
        firstname: 'Sebastian',
        lastname: 'Uddén',
        location: 'Sweden',
        image:
            'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg',
        createdAt: new Date(),
    });
    const user2 = new models.User({
        username: 'Henke',
        email: 'hfm@email.com',
        password: 'y',
        firstname: 'Henrik',
        lastname: 'Fridström',
        location: 'Sweden',
        image:
            'https://assets1.ignimgs.com/2019/01/11/avatar3d-1280-1547246301612_1280w.jpg',
        createdAt: new Date(),
    });

    // MESSAGES
    const message1 = new models.Message({
        text: 'Setup of the MEN structure is complete!',
        user: user1.id,
        createdAt: new Date(),
    });

    const message2 = new models.Message({
        text: 'Maybe time to add the R to complete MERN?',
        user: user2.id,
        createdAt: new Date(),
    });

    const message3 = new models.Message({
        text: 'By R, I mean React =)',
        user: user2.id,
        createdAt: new Date(),
    });

    const message4 = new models.Message({
        text:
            'Nice, that means MongoDb, Express, React and Node. Full Stack baby!',
        user: user1.id,
        createdAt: new Date(),
    });

    // HABITS
    const habit1 = new models.Habit({
        user: user1.id,
        title: 'Workout',
        description:
            'As often as possible, try to fit in mornings or late nights depending on the daily routine.',
        startDate: new Date(),
        endDate: new Date(),
        occasions: [
            {
                _id: uuidv4(),
                time: new Date('2019-06-05T10:30:05.000Z'),
                note: 'Notified',
            },
            {
                _id: uuidv4(),
                time: new Date('2019-06-06T10:30:05.000Z'),
                note: 'Notified',
            },
            {
                _id: uuidv4(),
                time: new Date('2019-06-07T10:30:05.000Z'),
                note: 'Notified',
            },
        ],
        rank: 1,
        createdAt: new Date(),
    });

    const habit2 = new models.Habit({
        user: user1.id,
        title: 'Clean apartment',
        description: 'Self explanatory and absolutely essential!',
        startDate: new Date(),
        endDate: new Date(),
        occasions: [
            {
                _id: uuidv4(),
                time: new Date('2019-06-10T10:30:05.000Z'),
                note: 'Notified',
            },
            {
                _id: uuidv4(),
                time: new Date('2019-06-12T10:30:05.000Z'),
                note: 'Notified',
            },
            {
                _id: uuidv4(),
                time: new Date('2019-06-12T14:30:05.000Z'),
                note: 'Notified',
            },
        ],
        rank: 2,
        createdAt: new Date(),
    });

    const habit3 = new models.Habit({
        user: user1.id,
        title: 'Work on my-web-tools',
        description:
            'This needs to be done at a regular basis in order to not forget the greater goal. Make sure to create clear guidelines for the next sesson before ending the current one.',
        startDate: new Date(),
        endDate: new Date(),
        occasions: [
            {
                _id: uuidv4(),
                time: new Date('2019-06-01T10:30:05.000Z'),
                note: 'Notified',
            },
            {
                _id: uuidv4(),
                time: new Date('2019-06-02T10:30:05.000Z'),
                note: 'Notified',
            },
            {
                _id: uuidv4(),
                time: new Date('2019-06-03T10:30:05.000Z'),
                note: 'Notified',
            },
        ],
        rank: 3,
        createdAt: new Date(),
    });

    const habit4 = new models.Habit({
        user: user1.id,
        title: 'Water plants',
        description:
            'Make sure plants are watered at a regular interval, this is key for them to grow because of the dry climate in the apartment.',
        startDate: new Date(),
        endDate: new Date(),
        occasions: [
            {
                _id: uuidv4(),
                time: new Date('2019-06-06T11:30:05.000Z'),
                note: 'Notified',
            },
            {
                _id: uuidv4(),
                time: new Date('2019-06-10T10:40:05.000Z'),
                note: 'Notified',
            },
            {
                _id: uuidv4(),
                time: new Date('2019-06-13T14:20:05.000Z'),
                note: 'Notified',
            },
        ],
        rank: 4,
        createdAt: new Date(),
    });

    // LINKS
    // const link1 = new models.Message({
    //     user: user1.id,
    //     type: 'link',
    //     name: 'parent',
    //     linkedId: '',
    //     createdAt: new Date(),
    // });
    // const link1 = new models.Message({
    //     user: user1.id,
    //     type: 'link',
    //     name: 'parent',
    //     linkedId: '',
    //     createdAt: new Date(),
    // });
    // const link2 = new models.Message({
    //     user: user1.id,
    //     type: 'link',
    //     name: 'child',
    //     linkedId: '',
    //     createdAt: new Date(),
    // });
    // const link3 = new models.Message({
    //     user: user1.id,
    //     type: 'link',
    //     name: 'child',
    //     linkedId: '',
    //     createdAt: new Date(),
    // });
    // const link4 = new models.Message({
    //     user: user1.id,
    //     type: 'link',
    //     name: 'child',
    //     linkedId: '',
    //     createdAt: new Date(),
    // });

    // MEMORIES
    const memory1 = new models.Memory({
        user: user1.id,
        type: 'Memory',
        name: 'Programming',
        description:
            'Computer programming is the process of designing and building an executable computer program for accomplishing a specific computing task.',
        createdAt: new Date('2019-06-16'),
        updatedAt: new Date('2019-06-17'),
        tags: ['skills', 'work description'],
    });
    const memory2 = new models.Memory({
        user: user1.id,
        type: 'Memory',
        name: 'JavaScript',
        description:
            'JavaScript is the programming language of the web. You can use it to add dynamic behavior, store information, and handle requests and responses on a website.',
        createdAt: new Date('2019-06-16'),
        updatedAt: new Date('2019-06-17'),
        tags: [
            'programming',
            'web-based languages',
            'logic',
            'dw online sales tech-stack',
        ],
        parents: [
            {
                _id: uuidv4(),
                type: 'Link',
                name: 'parent',
                linkedId: memory1._id,
            },
        ],
    });
    const memory3 = new models.Memory({
        user: user1.id,
        type: 'Memory',
        name: 'CSS',
        description:
            'CSS is a language that describes the style of an HTML document. It describes how HTML elements should be displayed.',
        createdAt: new Date('2019-06-16'),
        updatedAt: new Date('2019-06-17'),
        tags: [
            'programming',
            'web-based languages',
            'style',
            'dw online sales tech-stack',
        ],
        parents: [
            {
                _id: uuidv4(),
                type: 'Link',
                name: 'parent',
                linkedId: memory1._id,
            },
        ],
    });
    const memory4 = new models.Memory({
        user: user1.id,
        type: 'Memory',
        name: 'HTML',
        description:
            'HTML stands for Hyper Text Markup Language, which is the most widely used language on Web to develop web pages.',
        createdAt: new Date('2019-06-16'),
        updatedAt: new Date('2019-06-17'),
        tags: [
            'programming',
            'web-based languages',
            'layout',
            'dw online sales tech-stack',
        ],
        parents: [
            {
                _id: uuidv4(),
                type: 'Link',
                name: 'parent',
                linkedId: memory1._id,
            },
        ],
    });

    memory1.children = [
        {
            _id: uuidv4(),
            type: 'Link',
            name: 'child',
            linkedId: memory2._id,
        },
        {
            _id: uuidv4(),
            type: 'Link',
            name: 'child',
            linkedId: memory3._id,
        },
        {
            _id: uuidv4(),
            type: 'Link',
            name: 'child',
            linkedId: memory4._id,
        },
    ];

    // SWITCH
    switch (model) {
        case 'User':
            await user0.save();
            await user1.save();
            await user2.save();
            break;
        case 'Message':
            await message1.save();
            await message2.save();
            await message3.save();
            await message4.save();
            break;
        case 'Habit':
            await habit1.save();
            await habit2.save();
            await habit3.save();
            await habit4.save();
            break;
        case 'Memory':
            await memory1.save();
            await memory2.save();
            await memory3.save();
            await memory4.save();
            break;
        default:
            return;
    }
};
