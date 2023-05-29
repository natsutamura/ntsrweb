import { join } from "path";
import express from "express";
import { execSync } from "child_process";

const app = express();

const init = async () => {
    console.info("Building html pages...");
    execSync("npm run build", { stdio: "inherit" });

    console.info("Starting server...");
    // Serve static
    app.use("/dist", express.static(join(process.cwd(), "dist")));

    app.get("/favicon.ico", (req, res) => {
        res.sendFile(join(process.cwd(), "favicon.ico"));
    });

    app.get("*", async (req, res) => {
        res.sendFile(join(process.cwd(), "index.html"));
    });

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server listening on port ${process.env.SERVER_PORT}`);
    });

}


process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();