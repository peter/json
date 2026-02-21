#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')
const { promisify } = require('util')
const assert = require('node:assert')

const exec = (cmd) => promisify(childProcess.exec)(cmd).then(result => result.stdout.trim())

async function runTest(test) {
    const startTime = Date.now()
    console.log('\n--------------------------------------')
    console.log(`Test: ${test.name}`)
    console.log('--------------------------------------\n')
    console.log(`command: ${test.command}`)
    const output = await exec(test.command)
    console.log(`output: ${output}`)
    const elapsedTime = Date.now() - startTime
    console.log(`elapsed: ${elapsedTime}`)
    assert.strictEqual(output, test.expected)
}

async function run() {
    try {
        const startTime = Date.now()
        const spec = JSON.parse(fs.readFileSync(path.join(__dirname, 'test_spec.json'), 'utf8'))
        for (const test of spec.tests) {
            const result = await runTest(test)
        }
        const elapsedTime = Date.now() - startTime
        console.log(`\nTotal elapsed: ${elapsedTime}`)
        console.log(`Total tests run: ${spec.tests.length}`)
        process.exit(0)
    } catch (error) {
        console.log(error.stack || error)
        console.log('FAILURE!')
        process.exit(1)
    }
}

run()
