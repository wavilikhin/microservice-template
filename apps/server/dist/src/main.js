"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const env = require("dotenv-safe");
env.config({ path: './../.env' });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.API_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map