import { RNSamsungHealth } from "rn-samsung-health";

declare module "rn-samsung-health" {
  export interface RNSamsungHealth {
    authorize(): Promise<Object>;
    stop(): void;
    getDailyStepCount(options: Object): Promise<Object>;
    getWeight(options: Object): Promise<Object>;
    getSleep(options: Object): Promise<Object>;
    getHeartRate(options: Object): Promise<Object>;
    getBodyTemperature(options: Object): Promise<Object>;
    getBloodPressure(options: Object): Promise<Object>;
    getHeight(options: Object): Promise<Object>;
    getCholesterol(options: Object): Promise<Object>;
    unsubscribeListeners(): void;
    buildDailySteps(data: Object): Array;
    mergeResults(res: Object): Array;
  }
}

const samsungHealth: RNSamsungHealth;
export default samsungHealth;
