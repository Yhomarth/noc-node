
import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-services';

const time = '*/5 * * * * *';
    

const url : string = 'http://localhost:3000/posts';

const tick = ()=> {
    // new CheckService().execute('https://google.com');
    new CheckService(
        ()=> console.log( `${url} - ok` ),
        (error) => console.log(`${url} - no carga`)
    ).execute(url);
}

export class ServerApp {


    static start() {

        console.log('Server started..');
        CronService.createJob(time, tick );
        


    }

}