import { Router } from 'express';
const routes =  new Router();

import ProjectListController from './controllers/ProjectList';

routes.get('/project', ProjectListController.index );
routes.post('/project', ProjectListController.store );
routes.put('/project/:_id', ProjectListController.update );
routes.delete('/project/:_id', ProjectListController.delete );

export default routes;