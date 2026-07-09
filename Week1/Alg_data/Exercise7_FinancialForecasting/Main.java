package Alg_data.Exercise7_FinancialForecasting;

public class Main {

    public static double forecast(double amount, double rate, int years) {

        if (years == 0) {
            return amount;
        }

        return forecast(amount * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {

        double currentAmount = 10000;
        double growthRate = 0.10;
        int years = 3;

        double futureValue = forecast(currentAmount, growthRate, years);

        System.out.println("Future Value after " + years + " years = " + futureValue);
    }
}