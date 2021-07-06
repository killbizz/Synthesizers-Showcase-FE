import getlambdaResponse from 'src/lib/lambdas';
import { SynthesizerInterface } from './../app/interfaces/SynthesizerInterface';


export const insertSynthesizer = async (synth: SynthesizerInterface): Promise<boolean> => {
    const { response } = (
      await getlambdaResponse("synth", "POST", JSON.stringify(synth))
    ).props;
    if (response.err !== undefined) {
      return false;
    }
    return true;
  };
  
  export const removeSynthesizer = async (id: string): Promise<boolean> => {
    const { response } = (await getlambdaResponse(`synth/${id}`, "DELETE", null)).props;
    if (response.err !== undefined) return false;
    return true;
  };
  
  export const getSynthesizers = async (): Promise<SynthesizerInterface[]> => {
    const { response } = (
      await getlambdaResponse("synth", "GET", null)
    ).props;
  
    if (response.error || !response.result.items) return [];
    return response.result.items;
  };
  
  export const updateSynthesizer = async (id: string, modifiedSynth: SynthesizerInterface): Promise<boolean> => {
    const { response } = (
      await getlambdaResponse(
        `synth/${id}`,
        "PUT",
        JSON.stringify(modifiedSynth)
      )
    ).props;
    if (response.error !== undefined) return false;
    return true;
  };
  
  export const getSynthesizer = async (id: string): Promise<SynthesizerInterface> => {
    const response = (await getlambdaResponse(`synth/${id}`, "GET", null)).props.response
      .result;
    return response || null;
  };