import { Router } from "express";
import { 
    registerUser,
    loginUser,
    logoutUser,
    changeCurrentPassword,
    updateAccountDetails,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API endpoints for user authentication and account management
 */

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - username
 *               - password
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: Full name of the user
 *               email:
 *                 type: string
 *                 description: User's email address
 *               username:
 *                 type: string
 *                 description: Chosen username
 *               password:
 *                 type: string
 *                 description: Secure password
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */
router.route("/register").post(registerUser);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Log in a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 description: User's password
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 */
router.route("/login").post(loginUser);

/**
 * @swagger
 * /user/logout:
 *   post:
 *     summary: Log out a user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
router.route("/logout").post(verifyJWT, logoutUser);

/**
 * @swagger
 * /user/change-password:
 *   post:
 *     summary: Change user password
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - oldPassword
 *               - newPassword
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: Current password
 *               newPassword:
 *                 type: string
 *                 description: New password to set
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid old password
 */
router.route("/change-password").post(verifyJWT, changeCurrentPassword);

/**
 * @swagger
 * /user/update-account:
 *   patch:
 *     summary: Update user account details
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: Updated full name of the user
 *               email:
 *                 type: string
 *                 description: Updated email address
 *     responses:
 *       200:
 *         description: Account details updated successfully
 *       400:
 *         description: Validation error
 */
router.route("/update-account").patch(verifyJWT, updateAccountDetails);

export default router;
