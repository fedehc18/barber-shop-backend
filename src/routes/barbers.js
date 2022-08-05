const express = require("express");
const router = express.Router();
const BarbersService = require("../services/barbers");
const { successResponse, errorResponse, streamUpload } = require("../utils");
const multer = require("multer");
const fileUpload = multer();
const dotenv = require("dotenv");

dotenv.config();

const barbersService = new BarbersService();

router.post("/", fileUpload.single("image"), async (req, res) => {

    //create image on cloudinary
    result = await streamUpload(req);

    //create barber
    const barber = {
        name: req.body.name,
        lastName: req.body.lastName,
        description: req.body.description,
        imageUrl: result.url
    }

    try {
        let barberCreated = await barbersService.createBarber(barber);
        successResponse(req, res, barberCreated);
    } catch (error) {
        errorResponse(req, res, error);
    }
});

router.get("/", async (req, res) => {
    try {
        const barberId = req.query.id;
        if (barberId) {
            const barberCreated = await barbersService.getbarbersById(barberId);
            successResponse(req, res, barberCreated);
        } else {
            const barbersCreated = await barbersService.getbarbers();
            successResponse(req, res, barbersCreated);
        }
    } catch (error) {
        errorResponse(req, res, error);
    }
});

module.exports = router;
