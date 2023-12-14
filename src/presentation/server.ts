
import { CronJob } from 'cron';

export class ServerApp {


    static start() {
        console.log('Server started..');


        const job = new CronJob(
            '*/3 * * * * *', // cronTime
            function () {
                console.log('You will see this message every three second');
            }
        );
        job.start();


    }

}