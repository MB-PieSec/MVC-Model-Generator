import { exec } from "child_process";
import { promisify } from "util";

const fileTree = [
    "config",
    {"public": [
        "css",
        "js",
        "images"
    ]},
    {"src": [
        "models",
        "views",
        "controllers",
        "routes",
        "middleware"
    ]},
    "test"
]

const execShellCMD = promisify(exec);

async function runCommand(command){
    try {
        const { stdout, stderr } = await execShellCMD(command);
        if (stderr) {
            console.error("stderr:", stderr);
        }
        return stdout.trim();
    } catch (error) {
        console.error("Error executing command:", error.message);
        throw error;
    }
}
async function createDirectories(filePath){
    await runCommand(`cd ${filePath}`);
    for (const dir of fileTree){
        if (typeof dir !== "object"){
            await runCommand(`mkdir ${dir}`)
            
        } else {
            for (const i of Object.entries(dir)){
                await runCommand(`mkdir ${i[0]}`);
                for (const x of i[1]){
                    await runCommand(`cd ${i[0]} && mkdir ${x}`);
                }
            }
        }
    }

}
export async function init(){
    const filePath = process.cwd();
    console.log(`Creating directories in ${filePath}`);
    await createDirectories(filePath);
}
