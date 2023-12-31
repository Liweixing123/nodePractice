// 基础模型
class BaseModel {
    constructor(data ,message) {
        if (typeof data === 'string') {
            this.message = data;
            data = null;
            message = null;
        }

        if (data) {
            this.data = data;
        }

        if (message) {
            this.message = message;
        }
    }
}

// 成功的模型
class successModel extends BaseModel { 
    constructor(data ,message) {
        super(data, message)
        this.errorno = 0
    }
}

// 失败的模型
class ErrorModel extends BaseModel { 
    constructor(data ,message) {
        super(data, message)
        this.errorno = -1
    }
}

module.exports = {
    successModel,
    ErrorModel
}