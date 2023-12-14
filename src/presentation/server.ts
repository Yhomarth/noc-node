import { CronService } from "./cron/cron-service";

const time = '*/5 * * * * *';
        

const tick = ()=> {
    const date = new Date();
    console.log( `tarea corrida ${date}` );
}

export class ServerApp {


    static start() {

        console.log('Server started..');

        CronService.createJob(time, tick );
        


    }

}