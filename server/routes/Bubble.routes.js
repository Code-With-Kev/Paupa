const BubbleController = require("../controller/Bubblecontroller")

module.exports = app => {
    app.get("/api/bubbles", BubbleController.allBubbles)
    app.post("/api/bubbles", BubbleController.createBubble)
    app.get("/api/bubbles/:id", BubbleController.oneBubble)
    app.put("/api/bubbles/:id", BubbleController.updateBubble)
    app.delete("/api/bubbles/:id", BubbleController.deleteBubble)
}