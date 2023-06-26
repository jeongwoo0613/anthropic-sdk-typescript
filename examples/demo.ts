#!/usr/bin/env yarn tsn -T

import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic(); // gets API Key from environment variable ANTHROPIC_API_KEY

async function main() {
  const result = await client.completions.create({
    prompt: `${Anthropic.HUMAN_PROMPT} how does a court case get to the Supreme Court? ${Anthropic.AI_PROMPT}`,
    model: 'claude-v1.3',
    max_tokens_to_sample: 300,
  });
  console.log(result.completion);
}

main().catch(console.error);
