import { NewSynthesizer } from 'src/app/classes/NewSynthesizer';
import { StoredSynthesizer } from 'src/app/classes/StoredSynthesizer';
import getlambdaResponse from 'src/lib/lambdas';

// sposto tutto in un componente SERVICE 


export const insertSynthesizer = async (synth: NewSynthesizer): Promise<boolean> => {
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
  
  export const getSynthesizers = async (): Promise<StoredSynthesizer[]> => {
    const { response } = (
      await getlambdaResponse("synth", "GET", null)
    ).props;
  
    if (!response._embedded) return [];
    return response._embedded.synth.sort((a: StoredSynthesizer,b : StoredSynthesizer) => {
      if(a.id > b.id){
        return -1;
      }
      if(a.id < b.id){
        return 1;
      }
      return 0;
    })
  };
  
  export const updateSynthesizer = async (id: number, modifiedSynth: NewSynthesizer): Promise<boolean> => {
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
  
  export const getSynthesizer = async (id: number): Promise<StoredSynthesizer> => {
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