import express from "express";
import  {DeliveryPartnerController} from "./controller/delivery-partner-controller.js"

const router = express.Router();
const deliveryPartnerController = new DeliveryPartnerController();

/**
 * @swagger
 * tags:
 *   name: DeliveryAgents
 *   description: Delivery Agent management APIs
 */




/**
 * @swagger
 * /agent/list:
 *   get:
 *     summary: Get all delivery agents
 *     tags: [DeliveryAgents]
 *     responses:
 *       200:
 *         description: Delivery agents fetched successfully
 */
router.get("/list", deliveryPartnerController.deliveryPartnerList);

/**
 * @swagger
 * /agent/add:
 *   post:
 *     summary: Create delivery agent
 *     tags: [DeliveryAgents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               agentId:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               mobile:
 *                 type: string
 *               otp:
 *                 type: integer
 *               otpValidity:
 *                 type: string
 *               cityId:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, inactive, suspend, hold]
 *               createdOn:
 *                 type: string
 *     responses:
 *       200:
 *         description: Delivery agent created
 */
router.post("/add", deliveryPartnerController.addDeliveryPartner);




/**
 * @swagger
 * /agent/update:
 *   patch:
 *     summary: Update delivery agent
 *     tags: [DeliveryAgents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - agentId
 *             properties:
 *               agentId:
 *                 type: string
 *                 example: "AGENT123"
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               mobile:
 *                 type: string
 *                 example: "9876543210"
 *               status:
 *                 type: string
 *                 enum: [active, inactive, suspend, hold]
 *                 example: "active"
 *     responses:
 *       200:
 *         description: Delivery agent updated successfully
 *       400:
 *         description: agentId is required
 *       500:
 *         description: Server error
 */
router.patch("/update", deliveryPartnerController.updateDeliveryPartner);

/**
 * @swagger
 * /agent/delete:
 *   delete:
 *     summary: Delete delivery agent
 *     tags: [DeliveryAgents]
 *     parameters:
 *       - in: query
 *         name: agentId
 *         required: true
 *         schema:
 *           type: string
 *         description: Delivery agent ID
 *     responses:
 *       200:
 *         description: Delivery agent deleted
 *       400:
 *         description: agentId is required
 *       404:
 *         description: Agent not found
 */
router.delete("/delete", deliveryPartnerController.deleteDeliveryPartner);

export default router;