// Your secret/variable
export interface Env {
	MY_VARIABLE: string
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return new Response(env.MY_VARIABLE);
	},
};
