import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://default:pLeh2OEm2DU8J1m5VsdkIcVOLbQvhpCF@redis-15751.c9.us-east-1-2.ec2.redns.redis-cloud.com:15751"
});

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("connect", () => console.log("✅ Redis Connected"));

await redisClient.connect();

export default redisClient;
