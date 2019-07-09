import Project from '../models/Project';

class ProjectListController {

    async index(req, res){
        
        const projects = await Project.find();
        return res.json(projects);

    }

    async store(req, res){

            const { title, description } = await Project.create(req.body);
            const project = {
                title,
                description
            }
            return res.json(project);

    }

    async update(req, res){

        const _id = req.params;
        const { title, description } = req.body;

        await Project.updateOne(
            { "_id": _id },
            { $set: { "title": title , "description": description } }
        )

        const project = await Project.findById(_id);      
        return res.json(project);

    }

    async delete(req, res){
        
        const _id = req.params;
        await Project.deleteOne(_id);

        return res.json({Delete: "Success"});
    }

}

export default new ProjectListController();