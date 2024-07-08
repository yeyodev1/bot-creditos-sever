import express, { Application } from 'express';

import user from './user';
import credit from './credit';
import financialData from './financialData';;

function routerApi(app: Application) {
  const router = express.Router();

  app.use('/api', router);

  router.use(user);
  router.use(credit);
  router.use(financialData)
}

export default routerApi