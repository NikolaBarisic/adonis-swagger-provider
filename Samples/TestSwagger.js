/**
 *  @swagger
 *  definitions:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: uint
 *        username:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *      required:
 *        - username
 *        - email
 *        - password
 *        - test
 *        - 1234
 */

/**
 * @swagger
 * /api/test/hello:
 *   get:
 *     tags:
 *       - Test
 *     summary: Sample API
 *     parameters:
 *       - name: name
 *         description: Name of the user
 *         in: query
 *         required: false
 *         type: string
 *       - name: 123
 *         description: 123 of the user
 *         in: 123
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: return name
 *         example:
 *           message: return name
 *
 *
 *
 *
 * /user/{userId}:
 *  get:
 *    summary: Returns a user by ID.
 *    parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The ID of the user to return.
 *         schema:
 *         type: integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description: A user object.
 *        content:
 *        application/json:
 *        schema:
 *        type: object
 *    properties:
 *        id:
 *          type: integer
 *          format: int64
 *          example: 4
 *        name:
 *          type: string
 *          example: Jessica Smith
 *    '400':
 *      description: The specified user ID is invalid (not a number).
 *    '404':
 *      description: A user with the specified ID was not found.
 *    default:
 *       description: Unexpected error
 *
 *
 *
 *
 *
 */

/**
 * @swagger
 * /api/test/hello1:
 *   get:
 *     tags:
 *       - Test
 *     summary: Sample API
 *     parameters:
 *       - name: name
 *         description: Name of the user
 *         in: query
 *         required: false
 *         type: string
 *       - name: 123
 *         description: 123 of the user
 *         in: 123
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: return name
 *         example:
 *           message: return name
 */
