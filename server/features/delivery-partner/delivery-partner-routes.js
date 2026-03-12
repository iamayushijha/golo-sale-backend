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
 * /agent/delivery-agents:
 *   get:
 *     summary: Get all delivery agents
 *     tags: [DeliveryAgents]
 *     responses:
 *       200:
 *         description: Delivery agents fetched successfully
 */
router.get("/delivery-agents", deliveryPartnerController.deliveryPartnerList);

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
 * /agent/delivery-agents/{agentId}:
 *   patch:
 *     summary: Update delivery agent
 *     tags: [DeliveryAgents]
 *     parameters:
 *       - in: path
 *         name: agentId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               mobile:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Delivery agent updated
 */
router.patch("/:agentId", deliveryPartnerController.updateDeliveryPartner);


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