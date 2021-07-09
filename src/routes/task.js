import { Router } from "express";
const router = Router()
import {ObjectID} from 'mongodb'
import {connect} from '../db'

router.get('/',async(req,res)=>{
    const db = await connect()
    const result = await db.collection('tasks').find({}).toArray()
    res.json(result)
})
router.post('/',async(req,res)=>{
    const db = await connect()
    const task = {
        title: req.body.title,
        description: req.body.description
    }
    const result = await db.collection('tasks').insertOne(task)
    res.json(result.ops[0])
    // res.send(task)
})
router.get('/:id',async(req,res)=>{
    const id = req.params.id
    const db = await connect()
    const result = await db.collection('tasks').findOne({_id:ObjectID(id)})
    res.json(result)
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('task').deleteOne( { _id : ObjectID(id) } );
    res.json({
        message: `Task ${id} Deleted`,
        result
    });
});//no funciono

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const newTask = {
        title: req.body.title,
        description: req.body.description
    };
    const db = await connect();
    console.log(id,newTask);
    const result = await db.collection('task').updateOne({ _id: ObjectID(id) }, {$set: newTask });
    res.json({
        message: `Task ${id} Updated`
    });
});
export default router
//min 48.46