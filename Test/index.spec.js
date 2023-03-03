//toBe utiliza para comparar coisas não primitivas
//toEqual é utilizado para comparar tipos primitivos

import {soma,subtracao,multiplicacao,divisao} from './index.js'


describe('Testes de calculadora com valores inteiro ', () => {
    it('Deve retornar a soma de dois valores inteiro', () => {
        const esperado = 30;
        const retornado = soma(10,20);
        expect(retornado).toBe(esperado);
    });
    //criar o teste para retornar dois objetos 
    /* it('Deve retornar a comparação de dois objetos', () => {
        const objTestPessoa = {nome: "Beatriz", idade:90}
        expect(objTest).toEqual({nome: "Beatriz", idade:90});
    }) */

});
describe('Testes de calculadora com valores flutuante ', () => {
    it('Deve retornar a soma de dois valores flutuante', () => {
        const esperado = 26;
        const retornado = soma(15.5,10.5);
        expect(retornado).toBeCloseTo(esperado);
    });


});
describe('Testes de calculadora com valores negativos ', () => {
    it('Deve retornar a soma de dois valores negativos', () => {
        const esperado = -25;
        const retornado = soma(-10,-15);
        expect(retornado).toBe(esperado);
    });


});

describe('Testes de calculadora com multiplicação', () =>{
    it('Deve retornar a soma de valor inteiro ', () => {
        const esperado = 15;
        const retornado = multiplicacao(3, 5);
        expect(retornado).toBe(esperado);
    });
});


describe('Teste de calculadora com divisão', () => {
    it( 'Deve retornar a divisão', () => {
        const esperado = 6;
        const retornado = subtracao(12,6) ;
        expect(retornado).toBe(esperado)
    });
});

