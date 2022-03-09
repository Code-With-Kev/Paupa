module.exports.secretMessage = (req, res) => {
    res.json({message:process.env.FIXER_KEY})
}