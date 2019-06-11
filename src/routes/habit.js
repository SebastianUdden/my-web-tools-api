import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const habits = await req.context.models.Habit.find();
    return res.send(habits);
});

router.get('/:habitId', async (req, res) => {
    const habit = await req.context.models.Habit.findById(req.params.habitId);
    return res.send(habit);
});

router.post('/', async (req, res) => {
    const habit = await req.context.models.Habit.create({
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        occasions: req.body.occasions,
        rank: req.body.rank,
        createdAt: new Date(),
        user: req.context.me.id,
    });
    return res.send(habit);
});

router.put('/:habitId', async (req, res) => {
    const updatedHabit = await req.context.models.Habit.findByIdAndUpdate(
        req.params.habitId,
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                occasions: req.body.occasions,
                rank: req.body.rank,
                user: req.context.me.id,
                updatedAt: new Date(),
            },
        },
        { new: true },
    );
    return res.send(updatedHabit);
});

router.delete('/:habitId', async (req, res) => {
    const habit = await req.context.models.Habit.findById(req.params.habitId);
    let result = null;
    if (habit) {
        result = await habit.remove();
    }
    return res.send(result);
});

export default router;
