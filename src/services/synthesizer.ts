import getlambdaResponse from 'src/lib/lambdas';
import { SynthesizerInterface } from './../app/interfaces/SynthesizerInterface';

// sposto tutto in un componente SERVICE 


export const insertSynthesizer = async (synth: SynthesizerInterface): Promise<boolean> => {
    const { response } = (
      await getlambdaResponse("synth", "POST", JSON.stringify(synth))
    ).props;
    if (response.err !== undefined) {
      return false;
    }
    return true;
  };
  
  export const deleteSynthesizer = async (id: number): Promise<void> => {
    await getlambdaResponse(`synth/${id}`, "DELETE", null);
  };
  
  export const getSynthesizers = async (): Promise<SynthesizerInterface[]> => {
    const { response } = (
      await getlambdaResponse("synth", "GET", null)
    ).props;
  
    if (!response._embedded) return [];
    return response._embedded.synth;
  };
  
  export const updateSynthesizer = async (id: number, modifiedSynth: SynthesizerInterface): Promise<boolean> => {
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
  
  export const getSynthesizer = async (id: number): Promise<SynthesizerInterface> => {
    const { response } = (await getlambdaResponse(`synth/${id}`, "GET", null)).props;
    return response || null;
  };

  export const fileToBase64 = async (file: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = () => resolve('data:image/png;base64,'+btoa(reader.result!.toString()));
      reader.onerror = (e) => reject(e);
    });
  };