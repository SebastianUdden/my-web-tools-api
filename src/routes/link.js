import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const links = await req.context.models.Link.find();
    return res.send(links);
});

router.get('/:linkId', async (req, res) => {
    const link = await req.context.models.Link.findById(req.params.linkId);
    return res.send(link);
});

router.post('/', async (req, res) => {
    const link = await req.context.models.Link.create({
        type: req.body.type,
        name: req.body.name,
        linkedId: req.body.linkedId,
        createdAt: new Date(),
        user: req.context.me.id,
    });
    return res.send(link);
});

router.put('/:linkId', async (req, res) => {
    const updatedLink = await req.context.models.Link.findByIdAndUpdate(
        req.params.linkId,
        {
            $set: {
                type: req.body.type,
                name: req.body.name,
                linkedId: req.body.linkedId,
                user: req.context.me.id,
                updatedAt: new Date(),
            },
        },
        { new: true },
    );
    return res.send(updatedLink);
});

router.delete('/:linkId', async (req, res) => {
    const link = await req.context.models.Link.findById(req.params.linkId);
    let result = null;
    if (link) {
        result = await link.remove();
    }
    return res.send(result);
});

export default router;
