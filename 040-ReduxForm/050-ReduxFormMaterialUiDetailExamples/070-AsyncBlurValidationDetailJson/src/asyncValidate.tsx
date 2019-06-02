import sleep from "./sleep";

export default async (values : any ) => {
    console.log("run async validation:");
    console.log(values);
    if (!values.simpleTextField1){
        return sleep(1000).then(() => {
            throw { simpleTextField1: 'simpleTextField1 is invalid' };
        });
    }
    if (!values.simpleTextField2){
        return sleep(1000).then(() => {
            throw { simpleTextField2: 'simpleTextField2 is invalid' };
        });
    }
    return new Promise((resolve, reject) => {
        resolve();
    });
}