import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {

    if (err.code === "NotFound") {
        return res.status(404).send(err.message)
    }

    if (err.code === "Conflict") {
        return res.status(404).send(err.message)
    }

    return res.sendStatus(500)

};

export default errorHandler;
