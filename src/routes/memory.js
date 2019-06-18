import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const memories = await req.context.models.Memory.find();
    return res.send(memories);
});

router.get('/:memoryId', async (req, res) => {
    const memory = await req.context.models.Memory.findById(
        req.params.memoryId,
    );
    return res.send(memory);
});

router.post('/', async (req, res) => {
    const memory = await req.context.models.Memory.create({
        type: req.body.type,
        name: req.body.name,
        description: req.body.description,
        createdAt: new Date(),
        dueDate: req.body.dueDate,
        tags: req.body.tags,
        children: req.body.children,
        parents: req.body.parents,
        user: req.context.me.id,
    });
    console.log('================');
    console.log('memory: ', memory);
    console.log('================');
    console.log('req.body: ', req.body);
    return res.send(memory);
});

router.put('/:memoryId', async (req, res) => {
    const updatedMemory = await req.context.models.Memory.findByIdAndUpdate(
        req.params.memoryId,
        {
            $set: {
                type: req.body.type,
                name: req.body.name,
                description: req.body.description,
                dueDate: req.body.dueDate,
                tags: req.body.tags,
                children: req.body.children,
                parents: req.body.parents,
                user: req.context.me.id,
                updatedAt: new Date(),
            },
        },
        { new: true },
    );
    return res.send(updatedMemory);
});

router.delete('/:memoryId', async (req, res) => {
    const memory = await req.context.models.Memory.findById(
        req.params.memoryId,
    );
    let result = null;
    if (memory) {
        result = await memory.remove();
    }
    return res.send(result);
});

export default router;
