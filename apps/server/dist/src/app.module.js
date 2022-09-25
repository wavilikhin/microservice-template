"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const posts_service_1 = require("./posts/posts.service");
const prisma_service_1 = require("./prisma.service");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
const posts_module_1 = require("./posts/posts.module");
const users_controller_1 = require("./users/users.controller");
const posts_controller_1 = require("./posts/posts.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env', '.env.development'],
            }),
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
        ],
        controllers: [users_controller_1.UsersController, posts_controller_1.PostsController],
        providers: [prisma_service_1.PrismaService, users_service_1.UsersService, posts_service_1.PostsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map