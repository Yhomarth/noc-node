
import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-services';

const time = '*/5 * * * * *';
        

const tick = ()=> {
    new CheckService().execute('https://google.com');
}

export class ServerApp {


    static start() {

        console.log('Server started..');
        CronService.createJob(time, tick );
        


    }

}