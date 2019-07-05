import { Router } from 'express';
const routes =  new Router();

import ProjectController from './controllers/Project';

routes.get('/project', ProjectController.index );
routes.post('/project', ProjectController.store );
routes.put('/project/:_id', ProjectController.update );
routes.delete('/project/:_id', ProjectController.delete );

export default routes;