import cron from "node-cron";

export const testing = ()=>{
    console.log("Testing function schedule");
    cron.schedule("36 15 * * *", () => {
        console.log("Running scheduled");
    })
}
